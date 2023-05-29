"""create nut.vote-items table

Revision ID: 5a8f41ceb966
Revises: 1fa99a582173
Create Date: 2023-05-25 14:46:06.371140

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5a8f41ceb966'
down_revision = '1fa99a582173'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        'vote_items',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('star_', sa.Integer, nullable=False),
        sa.Column('resource_type', sa.String(length=255), nullable=False),
        sa.Column('resource_id', sa.Integer, nullable=False),
        sa.Column('version', sa.Integer, nullable=False, server_default='0'),
        sa.Column('updated_at', sa.DateTime, nullable=False),
        sa.Column('created_at', sa.DateTime,
                  nullable=False, server_default=sa.func.current_timestamp())
    )
    op.create_index('idx_vote_items_resource_type',
                    'vote_items', ['resource_type'])


def downgrade() -> None:
    op.drop_table('vote_items')
