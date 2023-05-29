"""create nut.feedbacks table

Revision ID: 0cce0c61a294
Revises: f0e171352bfb
Create Date: 2023-05-25 17:44:10.012865

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0cce0c61a294'
down_revision = 'f0e171352bfb'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        'feedbacks',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('user_id', sa.Integer, nullable=False),
        sa.Column('username', sa.String(length=63), nullable=False),
        sa.Column('mobile', sa.String(length=15), nullable=False),
        sa.Column('email', sa.String(length=127), nullable=False),
        sa.Column('content', sa.Text, nullable=False),
        sa.Column('content_editor', sa.Integer, nullable=False),
        sa.Column('resource_type', sa.String(length=255), nullable=False),
        sa.Column('resource_id', sa.Integer, nullable=False),
        sa.Column('status', sa.Integer, nullable=False),
        sa.Column('deleted_at', sa.DateTime),
        sa.Column('version', sa.Integer, nullable=False, server_default='0'),
        sa.Column('updated_at', sa.DateTime, nullable=False),
        sa.Column('created_at', sa.DateTime,
                  nullable=False, server_default=sa.func.current_timestamp())
    )
    op.create_index('idx_feedbacks_resource_type',
                    'feedbacks', ['resource_type'])
    op.create_index('idx_feedbacks_username', 'feedbacks', ['username'])
    op.create_index('idx_feedbacks_mobile', 'feedbacks', ['mobile'])
    op.create_index('idx_feedbacks_email', 'feedbacks', ['email'])


def downgrade() -> None:
    op.drop_table('feedbacks')
