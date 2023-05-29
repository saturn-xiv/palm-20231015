"""create nut.attachments-resources table

Revision ID: 2e771e175b43
Revises: 91b79b1fe527
Create Date: 2023-05-25 13:24:40.044473

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2e771e175b43'
down_revision = '91b79b1fe527'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        'attachments_resources',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('attachment_id', sa.Integer, nullable=False),
        sa.Column('resource_type', sa.String(length=255), nullable=False),
        sa.Column('resource_id', sa.Integer, nullable=False),
        sa.Column('created_at', sa.DateTime,
                  nullable=False, server_default=sa.func.current_timestamp())
    )
    op.create_index('idx_attachments_resources', 'attachments_resources',
                    ['attachment_id', 'resource_type', 'resource_id'], unique=True)
    op.create_index('idx_attachments_resources_type',
                    'attachments_resources', ['resource_type'])


def downgrade() -> None:
    op.drop_table('attachments_resources')
